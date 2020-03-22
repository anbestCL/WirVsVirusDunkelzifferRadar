""" Module holding all routes defined in app.yml """
import os
import datetime as dt

from .db_connector import DBConnector

DB = DBConnector(db_name=os.environ.get('DB_NAME'), db_user=os.environ.get('DB_USER'),
                 db_password=os.environ.get('DB_PASSWORD'), db_host=os.environ.get('DB_HOST'),
                 db_port=os.environ.get('DB_PORT'), db_ssl_cert=os.environ.get('DB_SSL_CERT'),
                 db_ssl_key=os.environ.get('DB_SSL_KEY'))

def hello_world():
    """
    Returns mock data.

    Returns:
        dict: mock data.
    """
    return {
        "test_id": 1,
        "message": "hello world"
    }

def add_questionnaire_entry(body):
    """
    Add Questionnaire entry to database.

    Args:
        body (dict): Content of questionnaire sent by frontend.

    Returns:
        tuple: status message.
    """
    if body:
        if "corona_date" in body:
            body['corona_date'] = dt.datetime.fromtimestamp(body['corona_date'])
        DB.insert_row(body)
    if body.get("corona_positive"):
        return (
            {
                "error": "He's dead Jim!"
            },
            400,
        )
    return {}, 200

def get_chart(chart_id):
    """

    Args:
        body:

    Returns:

    """
    return {"chart_id": chart_id, "x":[1,2,3], "y":[2,4,8]}