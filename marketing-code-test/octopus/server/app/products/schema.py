from . import models
import graphene
from graphene_django.types import DjangoObjectType


class ProductNode(DjangoObjectType):
    class Meta:
        model = models.Product
        fields = '__all__'


class Query(object):
    product = graphene.Field(ProductNode, product_id=graphene.ID())

    def resolve_product(self, info, product_id):
        return models.Product.objects.get(id=product_id)
