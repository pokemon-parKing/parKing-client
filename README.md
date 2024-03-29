<a id='readme-top'></a>

# ParKing Client

<img src="https://github.com/pokemon-parKing/parKing-client/assets/144174704/326b83e1-6654-4ea4-8ee5-a4cc8f7bba68" width="32%"></img> 
<img src="https://github.com/pokemon-parKing/parKing-client/assets/144174704/360f37a4-aa35-4634-b80f-6d0733e49616" width="32%"></img> 
<img src="https://github.com/pokemon-parKing/parKing-client/assets/144174704/89ccf72c-a93f-4eca-8fcc-10ea16b5ea7f" width="32%"></img> 
<img src="https://github.com/pokemon-parKing/parKing-client/assets/144174704/429b4b9a-42ac-4653-8dbe-3c892b31c4bb" width="32%"></img> 
<img src="https://github.com/pokemon-parKing/parKing-client/assets/144174704/294d9144-dced-4cf5-b108-6883c597822b" width="32%"></img> 
<img src="https://github.com/pokemon-parKing/parKing-client/assets/144174704/62812a3f-fcaa-4ae6-9f93-debc800f5f71" width="32%"></img> 

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li>
          <a href="#built-with">Built With</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
          <a href="#installation">Installation</a>
        </li>
        <li>
          <a href="#other-requirements">Other Requirements</a>
        </li>
      </ul>
    </li>
    <li>
       <a href="#roadmap">Roadmap</a>
    </li>
    <li>
       <a href="#features">Features</a>
    </li>
    <li>
       <a href="#future-enhancements">Future Enhancements</a>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
    <li>
      <a href="#links">Contact</a>
    </li>
  </ol>
</details>

## ❓ About

<a id='about'></a>
A SaaS application meant to optimize car parking and valet interactions. ParKing caters to high-traffic metropolitan areas, where parking logistics are often cumbersome and time consuming.

### Built With

<a id='build-with'></a>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Redux Thunk](https://img.shields.io/badge/Redux_Thunk-7853B8?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
<br />
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-009688?style=for-the-badge&logo=axios&logoColor=white)

## :rocket: Getting Started

<a id='getting-started'></a>
Instructions to setup the client on your local machine below.

### Prerequisites

<a id='prerequisites'></a>

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install npm@latest -g
```

### Required Environment Variables

```sh
VITE_GOOGLE_API_KEY=(google maps javascript api key)
VITE_MAP_ID=(google map id)
VITE_SUPABASE_KEY="your supabase anan key"
VITE_SUPABASE_URL="your supabase url"
VITE_RESERVATION_HOST="http://localhost:XXXX"
VITE_LOGIN_HOST="http://localhost:YYYY"
```

### Installation

<a id='installation'></a>

1. Clone the repo
   ```sh
   git clone https://github.com/pokemon-parKing/parKing-client
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Enter your ENV varaibles into a `.env` file
   ```
   See above for required variables
   ```
1. Start the Server
   ```sh
   npm run build
   ```

### Other Requirements
<a id='other-requirements'></a>
Our features require you to be running two separate servers alongside our application listed below

Reservation server:
   ```
   https://github.com/pokemon-parKing/parKing-reservation-server
   ```

Account server:
   ```
   https://github.com/pokemon-parKing/parKing-account-server
   ```

<a id='roadmap'></a>
## 🚗 Roadmap

- [x]  Meet client and gather requirements
- [x]  Scope out features - establish a general flow for the app
- [x]  Strategize approach and set expectations of team git work flow
- [x]  Determine our Tech stack
- [x]  Assign developer resources to product features
- [x]  Design feature wireframes
- [x]  Client proposal acceptance
- [x]  Create detailed designs of feature flow
- [x]  Engineer servers to handle our backend logic
- [x]  Start client-side implementation and finalize tech stack
- [x]  Integrate backend services with client-side features
- [x]  Integrate features for fluid transitions across our application
- [x]  Test features & refactor for quality assurance - pinpointing edgecases/potential bugs
- [x]  Client meeting for MVP acceptance/new feature
- [x]  Add features based on client request
- [x]  Finalize application flow and refactor for code quality

<a id='features'></a>
## ✅ Features


- [x]  User Auth - using google/supabase oauth

![GoogleOauth](https://github.com/pokemon-parKing/parKing-client/assets/144174704/dcac6b9f-0577-47ed-9609-a75759a43adf)

- [x]  QRcode - utilized for efficient check-in/check-out process

![QRcode](https://github.com/pokemon-parKing/parKing-client/assets/144174704/2505c2ce-2b9d-4b10-a0e8-3a8b0a3f9705)

- [x]  Reservation service - allowing users to make reservations

![ReservationService](https://github.com/pokemon-parKing/parKing-client/assets/144174704/cd2d21b2-87cf-4c8b-bda5-e88df28095a6)

- [x]  Valet service - allowing business owners to manage reservations

![ValetService](https://github.com/pokemon-parKing/parKing-client/assets/144174704/fd67a0b5-4957-4dcf-ad5a-06144bacda65)

- [x]  Account service - allow users to view/update account information

![AccountsService](https://github.com/pokemon-parKing/parKing-client/assets/144174704/65500557-5528-4794-8855-ff8a4d23d93c)

- [x]  Nodemailer - integrated as tool for communcation with users

![nodemailer](https://github.com/pokemon-parKing/parKing-client/assets/144174704/778cb92a-746b-4a4f-9547-29f4f14ec9b7)

- [x]  Google Maps - visualize reservation process for enhanced user experience
- [x]  Application flow - using react/tailwind for seamless transitions across application
- [x]  Supabase - utilized for data persistence

<a id='future-enhancements'></a>
## :wrench: Future Enhancements

- [ ]  Security
- [ ]  Scalability
- [ ]  System Integrity
- [ ]  404 handling


## 🙌 Contributing

<a id='contributing'></a>
Feel free to join in! Whether its fixing bugs, improving documentation, or
simply spreading the word!

<p align='center'>
  <img src='https://github.com/pokemon-parKing/parKing-client/assets/113388860/b8d0eeda-578e-4575-a713-bf7093ec0402' width='25%'></img>
</p>

## :link: Links to Developers

<table id='links' align='center'>
  <tr>
    <td>
      <h3 align='center'>Christian Lee</h3>
      <div align='center'>
      <a href='https://www.linkedin.com/in/christian-lee37'>
        <img src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white' />
      </a>
      <a href='https://github.com/clee4037'>
        <img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' />
      </a>
      </div>
      <hr />
    </td>
    <td>
      <h3 align='center'>Kyle Sampson</h3>
       <div align='center'>
      <a href="https://www.linkedin.com/in/sampsonkyle/">
        <img src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white' />
      </a>
      <a href="https://github.com/kssampson">
        <img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' />
      </a>
      </div>
      <hr />
    </td>
    <td>
      <h3 align='center'>Steven Kim</h3>
       <div align='center'>
      <a href="https://www.linkedin.com/in/stevkim/">
        <img src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white' />
      </a>
      <a href="https://github.com/stevkim">
        <img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' />
      </a>
      </div>
      <hr />
    </td>
    <td>
      <h3 align='center'>Jose Felix</h3>
      <div align='center'>
      <a href="https://www.linkedin.com/in/jose-m-felix/">
        <img src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white' />
      </a>
      <a href="https://github.com/jose-m-f">
        <img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' />
      </a>
      </div>
      <hr />
    </td>
  </tr>
  <tr>
    <td>
      <h3 align='center'>Kyle Mak</h3>
      <div align='center'>
      <a href="https://www.linkedin.com/in/kylejmak/">
        <img src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white' />
      </a>
      <a href="https://github.com/kjmak14">
        <img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' />
      </a>
      </div>
      <hr />
    </td>
    <td>
      <h3 align='center'>Kenneth Arguelles</h3>
      <div align='center'>
      <a href="https://www.linkedin.com/in/kennetharguelles/">
        <img src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white' />
      </a>
      <a href="https://github.com/KenMain5">
        <img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' />
      </a>
      </div>
      <hr />
    </td>
    <td>
      <h3 align='center'>Justin Cordova</h3>
      <div align='center'>
      <a href="https://www.linkedin.com/in/justinlcordova/">
        <img src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white' />
      </a>
      <a href="https://github.com/justcord10">
        <img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' />
      </a>
      </div>
      <hr />
    </td>
    <td>
      <h3 align='center'>Bruce Wong</h3>
      <div align='center'>
      <a href="https://www.linkedin.com/in/bruce-wong-24000/">
        <img src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white' />
      </a>
      <a href="https://github.com/bzw24">
        <img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' />
      </a>
      </div>
      <hr />
    </td>
  </tr>
</table>

<p align="right"><a href="#readme-top">back to top</a></p>
