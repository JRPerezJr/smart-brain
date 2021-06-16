export const handleRegistration = (email, password, name) => {
  fetch('http://localhost:3000/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.userId && data.success === 'true') {
        return data;
      }
    })
    .catch(err => console.log(err));
};

export const fetchUserData = (userId, token) => {
  fetch(`http://localhost:3000/profile/${userId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then(resp => resp.json())
    .then(user => {
      if (user && user.email) {
        return user;
      }
    })
    .catch(err => console.log(err));
};
