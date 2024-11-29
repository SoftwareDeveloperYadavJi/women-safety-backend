# Women Safety App Backend

## Project Overview

A robust backend service designed to enhance women's safety through real-time incident reporting and emergency alerts. Built with Node.js, Express.js, MySQL, and Twilio, and deployed on AWS EC2 for high availability and scalability.

## Features

- **Real-Time Incident Reporting**
  - Instantly share location with volunteers and family members
  - Immediate emergency notifications

- **Volunteer Alert System**
  - Location-based volunteer matching
  - Instant assistance notifications

- **Family Member Notifications**
  - Automatic SMS alerts via Twilio
  - Secure location sharing

- **Scalable Cloud Deployment**
  - Hosted on AWS EC2
  - Efficient database design

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Notifications**: Twilio
- **Cloud**: AWS EC2
- **Location Services**: Geolocation APIs

## Prerequisites

- Node.js (v14+)
- MySQL
- AWS EC2 instance

## Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/SoftwareDeveloperYadavJi/women-safety-backend.git
   cd women-safety-backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables (`.env` file)
   ```env
   PORT=5000
   MYSQL_HOST=your_mysql_host
   MYSQL_USER=your_mysql_user
   MYSQL_PASSWORD=your_mysql_password
   MYSQL_DATABASE=your_database_name
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   ```

4. Start the server
   ```bash
   npm start
   ```

## API Endpoints

### Incident Reporting
- **POST `/api/incidents/report`**
  ```json
  {
    "userId": "user123",
    "location": {
      "latitude": 28.6139,
      "longitude": 77.2090
    },
    "message": "Help needed!"
  }
  ```

### Volunteer Registration
- **POST `/api/volunteers/register`**
  ```json
  {
    "name": "John Doe",
    "phone": "+1234567890",
    "location": {
      "latitude": 28.7041,
      "longitude": 77.1025
    }
  }
  ```

### Alert Notification
- **POST `/api/alerts/send`**
  Sends alerts to family members and volunteers

## Deployment on AWS EC2

1. Launch EC2 instance
2. Configure security group (port 5000)
3. Clone repository
4. Install Node.js and MySQL
5. Use PM2 for process management
   ```bash
   npm install -g pm2
   pm2 start index.js
   ```

## Project Structure

```
women-safety-backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── package.json
├── .env
└── README.md
```

## Future Enhancements

- Mobile app integration
- Advanced volunteer matching algorithm
- Incident history tracking
- Push notification support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Submit a pull request

## License

MIT License

## Support

Contact: nitiny1524@gmail.com
