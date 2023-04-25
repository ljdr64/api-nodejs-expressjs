const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      job: faker.name.jobType(),
    });
  }
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    firstName: 'First Name 2',
    lastName: 'Last Name 2',
    job: 'Job 2',
  });
});

module.exports = router;
