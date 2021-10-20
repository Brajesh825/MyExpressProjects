STORE API
---------------------
GET(/api/v1/products)
---------------------
    -> Return First 10 products
---------------------

GET(/api/v1/products/?query)
---------------------
    query = name(String)
            ->return the product having the same name string in ascending order
    ----------------- 
    query = company(String)
            ->return the product having the same exact company
    -----------------
    query = featured(boolean)
            ->return the product depending on the whether it is featured or not
    ----------------- 
    query = numericFilters(String)
            ->price
                -> eg: numericFilters=price<40
                       It return all products which have price lower than 40
                supported operation = <,>,<=,>=,=    
            ->rating
                -> eg: numericFilters=rating>4.0
                       It return all products which have rating lower than 40
                supported operation = <,>,<=,>=,=
            ->price,rating
                -> eg: numericFilters=rating>=4.0,price=25
                       It return all products which have rating higher than 40 and price 25
                supported operation = <,>,<=,>=,=
    -----------------
    query = sort(String)
            ->eg: sort=name
                -> Sort the product based on ascending order of name
            ->eg: sort=name,featured
                -> Sort the product based on ascending order of name and featured
    ----------------- 
    query = fields(String)
            ->eg: fields=name,featured
                ->Return only name and featured of products
            Supported Fields= featured,rating,createdAt,_id,name,price,company
    -----------------
    query = page(Number)
            -> It return the products on the desired page,by default page is 1
    ----------------- 
    query = limit
            -> It limit the total amount of product to be returned by default it is 10
    -----------------
    All The above query params can be chained
---------------------