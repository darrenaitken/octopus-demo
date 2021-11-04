import graphene

from .products import schema as products_schema

from graphene_django.debug import DjangoDebug


class Query(
    products_schema.Query,
    graphene.ObjectType,
):
    debug = graphene.Field(DjangoDebug, name="_debug")


schema = graphene.Schema(query=Query)
