
const messageTable = {
                        create : `
                            DROP TABLE IF EXISTS messages;
                            CREATE TABLE IF NOT EXISTS messages(
                                id SERIAL PRIMARY KEY,
                                name VARCHAR DEFAULT '',
                                message VARCHAR NOT NULL
                            )
                        `,

                        insert : `
                            INSERT INTO messages(name, message)
                            VALUES ('chidimo', 'first message'),
                            ('orji', 'second message')
                        `,

                        drop : 'DROP TABLE messages'
                    }

module.exports = messageTable