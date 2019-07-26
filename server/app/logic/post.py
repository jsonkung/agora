import logging as log

from bson.objectid import ObjectId

from app.mongo_client import get_mongo_client


def insert_one(document, db_name='post', collection='default'):
    try:
        log.info('Starting to insert a document: %s into collection: %s', document, collection)
        client = get_mongo_client()
        db = client[db_name]
        db_collection = db[collection]
        result = db_collection.insert_one(document)
        log.info('Posted a document: %s, into collection: %s', result.inserted_id, collection)
        return True
    except Exception as e:
        log.error('Failed to insert a document, reason: %s', e.message)
        return False


def get_one(post_id, db_name='post', collection='default'):
    try:
        result = {}
        log.info('Starting to get document %s details', post_id)
        client = get_mongo_client()
        db = client[db_name]
        collection = db[collection]
        result = collection.find_one({'_id': ObjectId(post_id)})
        result.pop('_id')
        log.error(result)
    except Exception as e:
        log.error('Failed to get document, reason %s', e.message)
    return result or {}
