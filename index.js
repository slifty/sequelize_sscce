const models = require('./models')

// Passes: Update with camelCase parameter (`createdAt`)
// OUTPUTS:
// Executing (default): UPDATE "items" SET "test"=$1,"updated_at"=$2 WHERE "created_at" = $3
models.Item.update(
  { test: 'this_works' },
  {
    where: {
      createdAt: 0,
    },
  },
)

// Passes: Update with snake_case foreign key parameter (`category_id`)
//
// OUTPUTS:
// Executing (default): UPDATE "items" SET "test"=$1,"updated_at"=$2 WHERE "category_id" = $3
models.Item.update(
  { test: 'this_works' },
  {
    where: {
      category_id: 0,
    },
  },
)

// Fails: Update with camelCase foreign key parameter (`categoryId`)
// 
// OUTPUTS:
// Executing (default): UPDATE "items" SET "test"=$1,"updated_at"=$2 WHERE "categoryId" = $3
// Unhandled rejection SequelizeDatabaseError: column "categoryId" does not exist
// ...
models.Item.update(
  { test: 'this_errors' },
  {
    where: {
      categoryId: 0,
    },
  },
)