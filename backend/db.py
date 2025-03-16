import sqlite3
from pathlib import Path
import csv
from typing import List, Optional
from models import Member

DB_PATH = Path("members.db")

# Global connection
conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()


def create_schema() -> None:
    """Creates the database schema if it doesn't exist."""
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS members (
            first_name TEXT,
            second_name TEXT,
            department TEXT,
            PRIMARY KEY (first_name, second_name)
        )
    """)

    conn.commit()


def populate_database() -> None:
    """Populates the database with initial data from CSV."""
    with open("membros.csv", "r", encoding="utf-8") as f:
        csv_reader = csv.DictReader(f)
        for row in csv_reader:
            try:
                cursor.execute(
                    "INSERT INTO members (first_name, second_name, department) VALUES (?, ?, ?)",
                    (row["first_name"], row["second_name"], row["department"]),
                )
            except sqlite3.IntegrityError:
                # Skip if member already exists
                continue

    conn.commit()


def get_all_members() -> List[Member]:
    """Returns all members from the database."""
    cursor.execute("SELECT first_name, second_name, department FROM members")
    members = [
        Member(first_name=row[0], second_name=row[1], department=row[2])
        for row in cursor.fetchall()
    ]

    return members


def add_member(member: Member) -> bool:
    """Adds a new member to the database."""
    try:
        cursor.execute(
            "INSERT INTO members (first_name, second_name, department) VALUES (?, ?, ?)",
            (member.first_name, member.second_name, member.department),
        )
        conn.commit()
        success = True
    except sqlite3.IntegrityError:
        success = False

    return success


def get_member_by_name(first_name: str, second_name: str) -> Optional[Member]:
    """Gets a member by their full name."""
    cursor.execute(
        "SELECT first_name, second_name, department FROM members WHERE first_name = ? AND second_name = ?",
        (first_name, second_name),
    )

    row = cursor.fetchone()

    if row:
        return Member(first_name=row[0], second_name=row[1], department=row[2])
    return None


def kick_random_member() -> Optional[Member]:
    """Kicks a random member from the database."""
    cursor.execute("""
        WITH random_member AS (
            SELECT first_name, second_name, department 
            FROM members 
            ORDER BY RANDOM() 
            LIMIT 1
        )
        DELETE FROM members 
        WHERE (first_name, second_name) IN (
            SELECT first_name, second_name FROM random_member
        )
        RETURNING first_name, second_name, department
    """)

    row = cursor.fetchone()
    conn.commit()

    if row:
        return Member(first_name=row[0], second_name=row[1], department=row[2])
    return None
