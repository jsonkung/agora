import json
import os

from bottle import route, run, request, template

from logic import post
from logic.upload_image import upload_images_to_s3

index_html = '''My first web app! By <strong>{{ author }}</strong>.'''


@route('/')
def index():
    return template(index_html, author='Real Python')


@route('/agora/post/create/<category>/v1', method='POST')
def create_post(category):
    return json.dumps({'success': post.insert_one(request.json, collection=category)})


@route('/agora/image/<category>/upload/v1', method='POST')
def upload_images(category):
    file_obj = request.files.get('upload')
    return upload_images_to_s3([file_obj.file], category)


@route('/agora/posts/<category>/summary/v1', method='POST')
def get_matching_posts(category):
    return post.get_many(request.json, collection=category)


@route('/agora/post/<category>/<post_id>/details/v1', method='GET')
def get_post(category, post_id):
    return post.get_one(post_id, collection=category)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    run(host='0.0.0.0', port=port, debug=True, reloader=True)
