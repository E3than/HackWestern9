import requests

def punctuate(text):
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    response = requests.post('http://bark.phon.ioc.ee/punctuator', headers=headers, data=f"text={text}")
    return response.text