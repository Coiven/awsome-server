## controller 控制器

匹配对应route的控制函数

RESTful API 中controller的书写方式

Method      Path	        Route Name	Controller.Action
GET	        /api	        api	        app.controllers.api.index
GET	        /api/new	    new_post	app.controllers.api.new
GET	        /api/:id	    post	    app.controllers.api.show
GET	        /api/:id/edit	edit_post	app.controllers.api.edit
POST	    /api	        api	        app.controllers.api.create
PUT	        /api/:id	    post	    app.controllers.api.update
DELETE	    /api/:id	    post	    app.controllers.api.destroy


## cookie和session

[cookie&session](https://eggjs.org/zh-cn/core/cookie-and-session.html)

``` javascript
    this.ctx.cookies.get('cookie_name');
    this.ctx.cookies.set('cookie_name', 'cookie_value');  
```
