const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTransaction = async (req, res) => {
  try {
    const userId = req.userId;
    const { category, type, amount, description } = req.body;

    console.log(req.body);
    return;

    // const categoryFound = await prisma.category.findUnique({
    //   where: {
    //     name: category,
    //     userId,
    //   },
    // });

    // if (!categoryFound) {
    //   await prisma.category.create({
    //     data: {
    //       name: category,
    //       userId,
    //     },
    //   });

    //   categoryFound = await prisma.category.findUnique({
    //     where: {
    //       name: category,
    //     },
    //   });
    // }

    // console.log(categoryFound);

    // res.status(201).json({ message: "Successfully created new transaction" });
  } catch (error) {
    console.error("Error creating new transaction");
    console.error(error);
    res.status(400).json({ error });
  }
};

const readTransaction = async (req, res) => {
  try {
    const userId = req.userId;
    const transactions = await prisma.transaction.findMany({
      where: {
        userId,
      },
    });

    if (transactions.length == 0) throw "You haven't made any transaction yet!";

    res
      .status(200)
      .json({ message: "Found all the transactions", transactions });
  } catch (error) {
    console.error("Error reading transaction");
    console.error(error);
    res.status(400).json({ error });
  }
};

const readTransactionById = (req, res) => {};

const updateTransactionById = (req, res) => {};

const deleteTransactionById = (req, res) => {};

module.exports = {
  createTransaction,
  readTransaction,
  readTransactionById,
  updateTransactionById,
  deleteTransactionById,
};
