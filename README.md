<div align='center'>
    <img id='theme' src='https://github.com/XNeyMo/Liav/blob/main/assets/Liav.png' height='300px' alt='Logo' />
</div>

---

This ambitious project aims to **overhaul** the operational framework of a leading retail giant, renowned for its extensive network of e-commerce platforms and brick-and-mortar stores. Facing the challenge of **disparate legacy systems** developed over decades, the company struggles with **fragmented data** across various departments, hindering its ability to provide **seamless omni-channel experiences** and **personalized customer interactions**.

The initiative seeks to **dismantle existing monolithic structures** into **agile microservices** organized by business capability. Each microservice will expose **robust APIs**, facilitating **efficient data sharing** and consumption across the enterprise. An **advanced API gateway** will manage cross-cutting concerns such as **security protocols**, **traffic control**, and **performance monitoring**, ensuring **optimal operational efficiency**.

**Gone are the days** of disjointed promotions and inconsistent customer experiences. With a **streamlined architecture driven by flexible APIs** and enriched by **comprehensive data analytics**, the company is poised to **exceed customer expectations** while adapting swiftly to **evolving market dynamics**.

## :scroll: Table of Contents

1. :grey_question: [How to Use ?](#how-to-use)
2. :desktop_computer: [Technical Information](#technical-information)
    - :hammer_and_wrench: [Technologies](#technologies)
    - :open_file_folder: [Project Structure](#project-structure)
    - :gear: [How it Works ?](#how-it-works)
3. :copyright: [License](#license)
4. :wave: [Authors](#authors)

## <a name="how-to-use"> :grey_question: How to Use ?</a>

To begin using the [LIAV](https://liav.netlify.app) platform, start by accessing LIAV. **If you already have an account, simply sign in** to access the platform's features. **For new users, the platform allows you to create an account directly on the same page**, making it convenient to get started quickly.

Once logged in, you'll be greeted with the platform's home page, where you can **explore a wide array of products** offered. Navigate through categories and listings to find products that interest you, **all presented in an intuitive and user-friendly interface**.

When you find products you wish to purchase, **add them to your shopping cart with a simple click**. Proceed to the **checkout process where you can review your selections and finalize your purchase**. Payments are processed using platform credits, **which you can manage directly within your account**. **If you need to add credits, reach out to customer service via email to initiate the process**. Once verified, **an administrator will update your credits accordingly**.

As a user, you also have the flexibility to **update and manage your account information as needed**. Whether it's updating contact details or reviewing past purchases, **the platform ensures that you have full control over your user profile**.

For administrators, **logging into the platform redirects you to a comprehensive dashboard**. From here, you can oversee various sections such as **user management, inventory control, and supply chain operations**. **This dashboard interface is designed to streamline administrative tasks**, offering powerful tools to efficiently manage operations and enhance organizational control.

**This seamless and user-centric approach ensures that both customers and administrators alike can navigate the LIAV platform effortlessly, optimizing efficiency and maximizing user satisfaction**.

## <a name="technical-information"> :desktop_computer: Technical Information</a>

### <a name="technologies"> :hammer_and_wrench: Technologies</a>

<div align='center'>
    <img src='https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt='ReactJS' />
    <img src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' alt='Tailwind CSS' />
    <img src='https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=ffcc3b' alt='Python' />
    <img src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' alt='MongoDB' />
</div>

### <a name='project-structure'> :open_file_folder: Project Structure</a>

```
Liav/
├── assets/
│   └── Liav.png/
├── backend/
│   ├── config/
│   │   └── database.py
│   ├── microservices/
│   │   ├── customer.py
│   │   ├── product.py
│   │   ├── provider.py
│   │   └── user.py
│   ├── models/
│   │   ├── address.py
│   │   ├── customer.py
│   │   ├── product.py
│   │   ├── provider.py
│   │   └── user.py
│   ├── schemes/
│   │   ├── customer.py
│   │   ├── product.py
│   │   ├── provider.py
│   │   └── user.py
│   ├── app.py
│   └── requirements.txt
├── stylehub/
│   ├── public/
│   │   ├── _redirects
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   ├── src/
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   │   ├── adminlogo.png
│   │   │   │   ├── inventorymanagement.svg
│   │   │   │   ├── logo.png
│   │   │   │   ├── logout.svg
│   │   │   │   ├── supplychainmanagement.svg
│   │   │   │   ├── user.svg
│   │   │   │   └── usermanagement.svg
│   │   │   └── icons/
│   │   │   │   └── clothes.png
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   │   ├── CustomerManagement.jsx
│   │   │   │   ├── InventoryManagement.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── SupplyChainManagement.jsx
│   │   │   │   └── UserManagement.jsx
│   │   │   ├── forms/
│   │   │   │   ├── CustomerForm.jsx
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── ModifyCustomerForm.jsx
│   │   │   │   ├── ProductForm.jsx
│   │   │   │   ├── ProviderForm.jsx
│   │   │   │   ├── RegisterForm.jsx
│   │   │   │   └── UserForm.jsx
│   │   │   ├── headers/
│   │   │   │   ├── AdminHeader.jsx
│   │   │   │   ├── GuestHeader.jsx
│   │   │   │   └── HomeHeader.jsx
│   │   │   ├── home/
│   │   │   │   ├── Accessories.jsx
│   │   │   │   ├── Bottoms.jsx
│   │   │   │   ├── Cart.jsx
│   │   │   │   ├── Footwears.jsx
│   │   │   │   ├── Tops.jsx
│   │   │   │   └── User.jsx
│   │   │   ├── modals/
│   │   │   │   └── ProductModal.jsx
│   │   │   ├── CreditCard.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── hooks/
│   │   │   ├── update/
│   │   │   │   ├── useUpdateCustomer.js
│   │   │   │   ├── useUpdateProduct.js
│   │   │   │   ├── useUpdateProvider.js
│   │   │   │   └── useUpdateUser.js
│   │   │   ├── useAdminPage.js
│   │   │   ├── useAuth.js
│   │   │   ├── useAuthForm.js
│   │   │   ├── useDelete.js
│   │   │   ├── useFetchCustomers.js
│   │   │   ├── useFetchProducts.js
│   │   │   ├── useFetchProviders.js
│   │   │   ├── useFetchUsers.js
│   │   │   ├── useHomePage.js
│   │   │   ├── useLogin.js
│   │   │   ├── useRegister.js
│   │   │   └── useSearch.js
│   │   ├── pages/
│   │   │   ├── AdminPage.jsx
│   │   │   ├── AuthPage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── tailwind.config.mjs
├── .gitignore
├── LICENSE
└── README.md
```

### <a name="how-it-works"> :gear: How it Works ?</a>

Communication between the frontend and backend of the LIAV platform is secured using **JWT (JSON Web Tokens)**. After user authentication, both the frontend and backend have a **unique JWT token**. This token is then used to verify the legitimacy of requests made from the frontend to the backend. **For example, when a request such as searching for products is sent, the interface appends the JWT token in the request headers**.

Upon receiving the request, the backend verifies the JWT token included in the headers against its own stored token. **This validation ensures that the request comes from an authenticated and authorized user**. All endpoints on the backend [LiavBack](https://liavback.onrender.com) are protected by this **JWT-based security measure**. **Even if the endpoint addresses are known, access is restricted without the valid JWT token**.

**This strict security protocol prevents unauthorized access to backend endpoints and safeguards database integrity**. **Any request lacking a valid JWT token will be rejected**, ensuring that only authenticated users can access and modify data within the LIAV platform.

## <a name="license"> :copyright: License</a>

This project is licensed under the [GPT 3.0 License](https://opensource.org/license/gpl-3-0).

## <a name="authors"> :wave: Authors</a>

1. :frowning_man: **Neyan Montes**
   - GitHub: [XNeyMo](https://github.com/XNeyMo)
   - LinkedIn: [Neyan Montes](https://www.linkedin.com/in/neyanmontes/)
   - UpWork: [Neyan Montes](https://www.upwork.com/freelancers/~016725aa35a6808ac8)
   - Telegram: [XNeyMo](https://t.me/xneymo)
   - Email: [Neyan Montes](mailto:xneymodev@gmail.com)

2. :frowning_man: **Michael Taboada**
   - GitHub: [MichaelTaboada2003](https://github.com/MichaelTaboada2003)
   - LinkedIn: [Michael Taboada](https://www.linkedin.com/in/michael-taboada-naranjo-0263171b1)
   - Email: [Michael Taboada](mailto:narutosaga00@gmail.com)
  
3. :frowning_man: **Mauricio Donado**
   - GitHub: [DonadoM](https://github.com/DonadoM)
   - Instagram: [Who 4sked](https://www.instagram.com/who_4sked/?hl=en)
   - Email: [Mauricio Donado](mailto:mau.donado.canedo@gmail.com)
