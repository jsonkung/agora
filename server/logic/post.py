import logging as log

from bson.objectid import ObjectId

from server.mongo_client import get_mongo_client


def insert_one(document, db_name='post', collection='default'):
    try:
        log.info('Starting to insert a document: %s into collection: %s', document, collection)
        collection = _get_db_collection_obj(db_name, collection)
        result = collection.insert_one(document)
        log.info('Posted a document: %s, into collection: %s', result.inserted_id, collection)
        return True
    except Exception as e:
        log.error('Failed to insert a document, reason: %s', e.message)
        return False


def get_many(filters, db_name='post', collection='default'):
    try:
        response = {'documents': []}
        collection = _get_db_collection_obj(db_name, collection)
        db_cursor = collection.find(filters)
        documents = [document for document in db_cursor]
        _format_id(documents)
        response['documents'] = documents
    except Exception as e:
        log.error('Failed to find document matching the filter criteria, reason %s', e.message)

    return response


def get_one(post_id, db_name='post', collection='default'):
    try:
        document = None
        log.info('Starting to get document %s details', post_id)
        collection = _get_db_collection_obj(db_name, collection)
        document = collection.find_one({'_id': ObjectId(post_id)})
        _format_id([document])
    except Exception as e:
        log.error('Failed to get document, reason %s', e.message)
    return document or {}


def _get_db_collection_obj(db_name, collection_name):
    client = get_mongo_client()
    db = client[db_name]
    return db[collection_name]


def _format_id(documents):
    for document in list(filter(None, documents)):
        document['_id'] = str(document['_id'])
