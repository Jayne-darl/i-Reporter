import faker from 'faker';

const reportRecord = [
    {
        id: 1,
        createdOn: new Date(),
        createdBy: faker.name.findName(),
        type: "red flag",
        location: `${faker.address.longitude()}, ${faker.address.lattitude}}`,
        status: "rejected",
        images: [faker.image.avatar()],
        videos: [],
        comment: faker.lorem.sentences,
        updatedAt: new Date(),
    },

    {
        id: 2,
        createdOn: new Date(),
        createdBy: faker.name.findName(),
        type: "red flag",
        location: `${faker.address.longitude()}, ${faker.address.lattitude}}`,
        status: "rejected",
        images: [faker.image.avatar()],
        videos: [],
        comment: faker.lorem.sentences,
        updatedAt: new Date(),
    },

    {
        id: 3,
        createdOn: new Date(),
        createdBy: faker.name.findName(),
        type: "red flag",
        location: `${faker.address.longitude()}, ${faker.address.lattitude}}`,
        status: "rejected",
        images: [faker.image.avatar()],
        videos: [],
        comment: faker.lorem.sentences,
        updatedAt: new Date(),
    },
]



export default reportRecord;