import pymongo


def get_mongo_client(host='localhost', port=27017):
    uri = "mongodb://{host}:{port}".format(host=host, port=port)
    return pymongo.MongoClient(uri)
