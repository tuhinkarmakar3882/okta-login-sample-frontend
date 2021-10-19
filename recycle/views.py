import requests
from django.http import HttpResponseRedirect
from requests.auth import HTTPBasicAuth


def login_callback(request, *args, **kwargs):
    okta_code = request.GET.get('code')

    clientSecret = ''
    clientId = ''
    okta_auth_endpoint = "https://okta0----/oauth2/default/v1/token";

    response = dict(requests.post(
        url=okta_auth_endpoint,
        auth=HTTPBasicAuth(clientId, clientSecret),
        headers={
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
        },
        data={
            'grant_type': 'authorization_code',
            'redirect_uri': 'http://localhost:8000/login/callback/',
            'code': okta_code
        }
    ).json())

    redirect_endpoint = "http://localhost:1234/pages/authentication/callback.html?token_type={}&expires_in={}&access_token={}&scope={}&id_token={}".format(
        response.get('token_type'),
        response.get('expires_in'),
        response.get('access_token'),
        response.get('scope'),
        response.get('id_token'),
    )

    return HttpResponseRedirect(redirect_endpoint)
