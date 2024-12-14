"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoles = exports.currentUser = void 0;
exports.currentUser = {
    id: 1,
    name: 'Manas Sahu',
    designation: 'Developer',
    email: 'manas.sahu@email.com',
};
exports.userRoles = [
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
//# sourceMappingURL=user.js.map