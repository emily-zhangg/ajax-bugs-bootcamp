module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("features", [
      { name: "invoice", created_at: new Date(), updated_at: new Date() },
      { name: "footer", created_at: new Date(), updated_at: new Date() },
      { name: "header", created_at: new Date(), updated_at: new Date() },
      { name: "logic", created_at: new Date(), updated_at: new Date() },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("features", null, {});
  },
};
