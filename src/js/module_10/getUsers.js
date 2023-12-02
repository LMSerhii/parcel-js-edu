const getUsers = () => {
  const refs = {
    btn: document.querySelector('.btn'),
    userList: document.querySelector('.user-list'),
  };

  const searchParams = new URLSearchParams({
    _limit: 5,
    _page: 1,
    _sort: 'name',
  });

  refs.btn.addEventListener('click', onClick);

  function onClick(evt) {
    fetchUsers()
      .then(users => renderUsers(users))
      .catch(error => console.log(error));
  }

  function fetchUsers() {
    return fetch(`https://jsonplaceholder.typicode.com/users?${searchParams}`)
      .then(response => {
        // response hendling
        if (!response.ok) {
          throw new Error(response.status);
        }
        console.log(response);
        return response.json();
      })
      .then(json => {
        // data hendling
        console.log(json);
        return json;
      })
      .catch(error => {
        // error handling
        console.log(error);
      });
  }

  function renderUsers(users) {
    const markup = users
      .map(({ name, email, phone, company, address }) => {
        return `<li>  
                      <p><b>Name</b>: ${name}</p>
                      <p><b>Email</b>: ${email}</p>
                      <p><b>Phone</b>: ${phone}</p>
                      <p><b>Company</b>: ${company.name}</p>
                      <p><b>City</b>: ${address.city}</p>
                  </li>`;
      })
      .join('');

    refs.userList.insertAdjacentHTML('beforeend', markup);
  }

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json));
};

export { getUsers };
