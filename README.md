# Website version of FGCU Book Study Room Program
Check out FGCU-Book-StudyRooms for information about the program

## Scope
The goal of this project to is build on fgcu-studyrooms project and create a frontend. The website will provide a location where users can book a study room or schedule a booking for latter without having to navigating directly to the fgcu website.

## Concept of Operations
Users will be prompted to enter their informaiton such as name, email, date, and time. Once data is entered, the data will be valadated and if an error is rased the user will be notified and prompted to fix it. If a room was booked for the user, the message will be shown. If no room was able to be booked, a message will be displayed. User get an email from the school booking system with confirmation and rebooking instructions.
Future phases will enable users to request specific rooms to be booked based on the user's priority.

## Requirements
1- Users shall be able to enter their information on the site

2- The website shall book the room based on the user provided

3- When completed, the status of their request shall displayed to the user when it is completed

4- Users shall be able choose to book a room at the current time or set the booking to be completed at a latter time

5- If errors are thrown at any point, user shall reseive error message

## Techinal Requirements
1- The website and backend must be locally hosted and not created though a online plateform

2- The website shall use React and Fetch for the frontend

3- The backend shall use FastAPI and Python for the backend




## Architecture
### Framework

#### Front end
- Website: React
- Data handling: fetch

#### Backend
- Data handling: FastAPI
- Software: Python

### Data Flow Diagram
Coming Soon

## Phase 1.0
The version 1.0 of the app was created using CRA, Create React APP. This framework was selected due to its quick protyping ablities and low config requirement. The single paged app using this framework was created as a proof of concept. The app takes a user's input, sends it the backend where it is accepted, processed, and a status responce sent back.

An announcement was made on February 14, 2025 by React.dev stating that CRA is being is being sunsetted. Going foward, version 2.0 will use the same homepage as version 1.0 but will be built on a different framework.

## Phase 2.0
Version 2.0 is built on Next.js, see Frameworks Options for more information about why it was choosen. 

## Framework Options

### Next.js

#### Pros

- Large user base with lots of support
- Auto handles routing based on file structure
- provides easy API routing

#### Cons

- More configuration is required for some features compaired to other frameworks
- Loading can be slow
- App size can be larger do to amount of features compaired to other frameworks
- Built in routing and file structures can be restricitve to some projects

### Vite

#### Pros

- Built for fast development
- Very quick loading
- Built with moden Javascript features
- less config required to get a project started

#### Cons
- Focuses on frontend development
- Doesnt offer full backend support
- No built-in routing (3rd party libraries required)


