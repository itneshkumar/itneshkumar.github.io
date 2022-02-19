from email import header
from wsgiref import headers
import requests
import json

URL="http://127.0.0.1:8000/student"

def get_data(id=None):
    data={}
    if id is not None:
        data={'id':id}
    json_data=json.dumps(data)
    headers={'content-Type':'application/json'}
    r=requests.get(url=URL, headers=headers, data=json_data)
    data=r.json()
    print(data)

# get_data(1)
def create_data():
    data={
        'name':'itnesh',
        'roll':202,
        'city':'Relhi'
    }
    headers={'content-Type':'application/json'}
    json_data=json.dumps(data)
    r=requests.post(url=URL, headers=headers, data=json_data)
    data=r.json()
    print(data)
    
# create_data() 



def update_data():
    data={
        'id':2,
        'name':'nitu',
        'city':'Delhi'
    }
    # json_data=json.dumps(data)
    #full update partial get ride out in views in serialisations
    # data={
    #     'id':211,
    #     'name':'Manish',
    #     'roll': 12,
    #     'city':'Dhanbad'
    # }
    json_data=json.dumps(data)
    headers={'content-Type':'application/json'}
    r=requests.put(url=URL, headers=headers, data=json_data)
    data=r.json()
    print(data)

# update_data()

def delete_data():
    data={
        'id':5
    }
    # json_data=json.dumps(data)
    json_data=json.dumps(data)
    headers={'content-Type':'application/json'}
    r=requests.delete(url=URL, headers=headers, data=json_data)
    data=r.json()
    print(data)

delete_data()
