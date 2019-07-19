class MyRepr:
    def __repr__(self):
        return "MyRepr()"

    def __str__(self):
        return "Hello MyRepr"


obj = MyRepr()

obj_repr = repr(obj)
new_obj = eval(obj_repr)

print(type(new_obj))
