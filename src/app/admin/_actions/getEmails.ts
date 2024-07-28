import db from "@/db";

const getEmails = async () => {
  const emails = await db.order.findMany({
    select: {
      email: true,
    },
  });

  if (!emails || emails.length === 0) {
    return [];
  }

  const filteredEmails = emails
    .map((email) => email.email)
    .filter((email) => email !== null)
    .filter((email, index, self) => self.indexOf(email) === index);

  return filteredEmails;
};

export default getEmails;
