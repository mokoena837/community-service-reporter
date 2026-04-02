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
