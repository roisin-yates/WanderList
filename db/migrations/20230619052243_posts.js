/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id').primary()
    table.integer('country_id')
    table.string('message')
    table.date('arrival_date')
    table.date('departure_date')
    table.dateTime('date_created')
    table.dateTime('last_updated')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('posts')
}
