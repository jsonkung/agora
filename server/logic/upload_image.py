import StringIO
import logging as log
import uuid

from botocore.exceptions import BotoCoreError

from server.s3_client import get_s3_client


# TODO: Add a retry decorator
def _upload_image(image_obj, bucket, object_name):
    """Upload a file to an S3 bucket

    :param image_obj: Image to upload
    :param bucket: Bucket to upload to
    :param object_name: S3 object name. If not specified then hash(image) is used
    :return: True if file was uploaded, else False
    """
    # Upload the file
    s3_client = get_s3_client()
    _ = s3_client.upload_fileobj(image_obj, bucket, object_name)


def _download_image(key, category):
    """

    :param key:
    :param category:
    :return: returns a stream object (StringIO)
    """

    s3_client = get_s3_client()
    file_like = StringIO.StringIO()

    s3_client.download_fileobj(category_to_s3_bucket.get(category, 'agora-photos'), key, file_like)
    return file_like


def upload_images_to_s3(images, category=None):
    """

    :param images:
    :param category:
    :return: status of the upload with
    """
    object_names = []
    upload_status = {
        'success': True,
        'object_names_s3': object_names,
    }
    for image in images:
        object_name = str(uuid.uuid1().int)
        try:
            _upload_image(image, bucket=category_to_s3_bucket.get(category, 'agora-photos'), object_name=object_name)
            object_names.append(object_name)
        except BotoCoreError as e:
            upload_status['success'] = False
            log.error('Failed to upload images to s3, reason: %s', e.message)
            break

    return upload_status


category_to_s3_bucket = {
    'food': 'agora-photos'
}
