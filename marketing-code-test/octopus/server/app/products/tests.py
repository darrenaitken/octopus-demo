import pytest
import factory
from graphene import test as graphene_test
from .. import schema
from . import models


class Product(factory.DjangoModelFactory):
    class Meta:
        model = models.Product


@pytest.mark.django_db
def test_energy_product_by_id():
    # Create product
    product_id = 2
    variables = {"id": product_id}
    fetch_product_query = """query getProductById($id: ID!) {
      product(productId: $id) {
        id
        name
        power
        description
        price
        quantity
        brand
        weight
        height
        width
        length
        modelCode
        colour
      }
    }
    """

    energy_product = Product(
        id=product_id,
        name='Bulb',
        power='12W',
        description='Foo bar',
        price=100,
        quantity=4,
        brand='Bright',
        weight=1.0,
        height=1.0,
        width=1.0,
        length=1.0,
        model_code='FOO_BAR',
        colour='White',
    )

    client = graphene_test.Client(schema.schema)
    executed = client.execute(fetch_product_query, variable_values=variables)

    assert "errors" not in executed

    product = executed["data"]["product"]

    assert product["id"] == str(product_id)
    assert product["name"] == energy_product.name
    assert product["power"] == energy_product.power
    assert product["description"] == energy_product.description
    assert product["price"] == energy_product.price
    assert product["quantity"] == energy_product.quantity
    assert product["brand"] == energy_product.brand
    assert product["weight"] == energy_product.weight
    assert product["height"] == energy_product.height
    assert product["width"] == energy_product.width
    assert product["length"] == energy_product.length
    assert product["modelCode"] == energy_product.model_code
    assert product["colour"] == energy_product.colour
