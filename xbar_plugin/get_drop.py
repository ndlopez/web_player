# Access dropbox API
# Go to developers.dropbox.com
# sign in an app name and get/generate access_token

from importlib.metadata import metadata
import pathlib
import re
import pandas as pd

import dropbox # pip install dropbox
from dropbox.exceptions import AuthError

DROPBX_ACC_TOKEN = 'got from dev.dropbox.com'

def dropbox_connect():
    """Create a conn to Dropbox"""
    try:
        dbx = dropbox.Dropbox(DROPBX_ACC_TOKEN)
    except AuthError as err:
        print("Error trying to connect to Dropbox"+str(err))
    return dbx

def dropbox_list_files(path):
    """Return a pandas DF of files in a given dropbox folder path in the Apps directory"""
    dbx = dropbox_connect()
    try:
        files = dbx.files_list_folder(path).entries
        files_list = []
        for file in files:
            if isinstance(file,dropbox.files.FileMetadata):
                metadata = {'name':file.name,
                'path_display':file.path_display,
                'client_modified': file.client_modified,
                'server_modified': file.server_modified}
                files_list.append(metadata)

        df = pd.DataFrame.from_records(files_list)

        return df.sort_values(by='server_modified',ascending=False)
    except Exception as err:
        print("Error trying to get list of files:" + str(err))

def dropbox_down_file(dropbox_file_path,local_file_path):
    """Download a file from Dropbox to local storage"""
    try:
        dbx = dropbox_connect()
        with open(local_file_path,'wb') as myFile:
            metadata, result = dbx.files_download(path=dropbox_file_path)
            myFile.write(result.content)
    except Exception as err:
        print("Error downloading file from dbx: "+str(err))

def dropbox_upload_file(local_path,local_file,dropbox_file_path):
    """Upload a file from local to a path in dropbox app dir.
        Args: local_path(str): path to local file
        local_file(str): name of local file
        dropbox_file_path (str): the path to the file in the dropb app dir
    """
    try:
        dbx = dropbox_connect()
        local_file_path = pathlib.Path(local_path) / local_file
        with local_file_path.open("rb") as myFile:
            meta = dbx.files_upload(myFile.read(), dropbox_file_path, mode=dropbox.files.WriteMode("overwrite"))
            return meta
    except Exception as err:
        print("Error uploading file to DBx:"+str(err))
