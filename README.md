# Build Teacher App using React

+ Link git [Github Teacher App](https://github.com/khoanguyen84/teacher-app).
+ Link sản phẩm [Teacher App](https://github.com/facebook/create-react-app).

## Kiến thức sử dụng
+ Bootstrap 5
+ Axios
+ Hooks (useState, useEffect, useParams, useNavigate,...)
+ Cloudinary

## Thư viện/framework
+ Bootstrap: npm i bootstrap@5.0.1
+ Fontawesome: npm i @fortawesome/fontawesome-free
+ React-Router-DOM: npm i react-router-dom
+ Font-family: Baloo Tamma 2
+ Axios: npm i axios
+ Toastify: npm i react-toastify

## Deploy React to Github Page
+ gh-page: npm install gh-pages --save-dev
+ Update package.json: "homepage": "https://khoanguyen84.github.io/teacher-app"
+ Update package.json: scripts: {
    "predeploy": "npm run build",
    "deploy" : "gh-pages -d build",
    ...
}
+ Để deploy: npm run deploy

## Template
+ Pinterest: https://www.pinterest.com/pin/170292429651733879/