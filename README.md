# Community Service Reporter

A Django-based web application designed to help residents report and track municipal service delivery issues such as potholes, water leaks, electricity faults, and waste collection problems.

## Features

- **Report Issues**: Submit service delivery problems with category selection, location, description, and photo upload
- **Track Status**: Monitor the progress of submitted reports with visual status indicators
- **Search Reports**: Real-time search functionality to filter reports by location or description
- **Responsive Design**: Clean white interface with black accents, works on desktop and mobile
- **Dark Mode Support**: Manual dark mode toggle with persistent preference
- **Statistics Dashboard**: View report statistics at a glance

## Technology Stack

- **Backend**: Django 5.2.12
- **Frontend**: HTML5, CSS3, JavaScript
- **Database**: SQLite3
- **Version Control**: Git & GitHub

## Project Structure

\\\
community-service-reporter/
├── manage.py
├── requirements.txt
├── db.sqlite3
├── community_reporter/     # Project settings
├── reports/                # Report management app
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── templates/reports/
└── tracking/               # Report tracking app
    ├── views.py
    ├── urls.py
    └── templates/tracking/
\\\

## Installation

1. Clone the repository:
\\\ash
git clone https://github.com/yourusername/community-service-reporter.git
cd community-service-reporter
\\\

2. Create a virtual environment:
\\\ash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
\\\

3. Install dependencies:
\\\ash
pip install -r requirements.txt
\\\

4. Run migrations:
\\\ash
python manage.py makemigrations
python manage.py migrate
\\\

5. Create superuser (optional):
\\\ash
python manage.py createsuperuser
\\\

6. Run the development server:
\\\ash
python manage.py runserver
\\\

7. Open your browser and navigate to: http://127.0.0.1:8000

## Screenshots

### Report Issue Interface
[Add screenshot here]

### My Reports Dashboard
[Add screenshot here]

### Report Status Details
[Add screenshot here]

### User Profile
[Add screenshot here]

## Navigation

| Link | Destination | Purpose |
|------|-------------|---------|
|  MY REPORTS | /tracking/ | View and track all reports |
|  REPORT ISSUE | / | Submit new service issues |
|  PROFILE | /tracking/profile/ | View account statistics |

## Design Features

- Clean white background with black accents
- Color-coded status indicators (yellow, blue, green)
- Real-time search with debouncing
- Photo preview on upload
- Loading spinner during form submission
- Mobile-responsive layout

## User Personas

### Thabo
- 34-year-old taxi driver
- Needs quick mobile reporting while working
- Values efficiency and minimal steps

### Maria
- 55-year-old small business owner
- Needs detailed updates and status tracking
- Values transparency and communication

## License

This project was created for academic purposes as part of the Human-Computer Interaction course (NHCI63110) at Sol Plaatje University.

## Author

**Maafrica Mokoena**
- Student Number: 20243380
- Sol Plaatje University

## Acknowledgments

- City of Johannesburg e-Services platform (evaluated for design improvements)
- Interaction design principles from Preece, Rogers & Sharp (2019)
- WCAG 2.1 accessibility guidelines
