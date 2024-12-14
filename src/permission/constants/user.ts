export const currentUser = {
  id: 1,
  name: 'Manas Sahu',
  designation: 'Developer',
  email: 'manas.sahu@email.com',
};

export const userRoles = [
  {
    name: 'Admin',
    description: 'Admin role',
    permissions: [
      {
        action: 'read',
        subject: 'User',
      },
      {
        action: 'update',
        subject: 'User',
      },
      {
        action: 'create',
        subject: 'Organization',
      },
    ],
  },
];
