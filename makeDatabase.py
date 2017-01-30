import sqlite3


def create_new_database():
    conn = sqlite3.connect('inventory2.db')
    c = conn.cursor()
    c.execute("""CREATE TABLE IF NOT EXISTS inventory
                        (id INTEGER PRIMARY KEY,
                        name char(100) NOT NULL,
                        category char(100) NOT NULL,
                        location char(100),
                        date char(12),
                        amount INTEGER NOT NULL);
                """)
    conn.commit()
    print 'Database created'
