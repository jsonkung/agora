import json
import os

from bottle import route, run, request, template

from app.logic import post
from app.logic.upload_image import upload_images_to_s3

index_html = '''My first web app! By <strong>{{ author }}</strong>.'''

@route('/')
def index():
    return template(index_html, author='Real Python')


@route('/agora/post/create/<category>/v1', method='POST')
def create_post(category):
    body = request.json
    return json.dumps({'success': post.insert_one(body, collection=category)})


@route('/agora/image/<category>/upload/v1', method='POST')
def upload_images(category):
    file_obj = request.files.get('upload')
    image_like = file_obj.file
    response = upload_images_to_s3([image_like], category)
    return response


@route('/agora/post/<category>/<post_id>/details/v1', method='GET')
def get_post(category, post_id):
    return post.get_one(post_id, collection=category)

def runserver():
    port = int(os.environ.get('PORT', 8080))
    run(host='0.0.0.0', port=port, debug=True, reloader=True)