from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    power = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True)
    brand = models.TextField(null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)
    height = models.FloatField(null=True, blank=True)
    width = models.FloatField(null=True, blank=True)
    length = models.FloatField(null=True, blank=True)
    model_code = models.TextField(null=True, blank=True)
    colour = models.TextField(null=True, blank=True)
    img_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name
