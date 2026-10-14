"""A multiple-choice information security quiz based on the course materials."""

from dataclasses import dataclass


@dataclass(frozen=True)
class Question:
    prompt: str
    options: tuple[str, str, str, str]
    answer: str
    explanation: str


QUESTIONS = (
    Question(
        "What is an information security asset?",
        (
            "Only a computer owned by a company",
            "Any resource that has value to a person or organization",
            "A type of malware",
            "A password used by an administrator",
        ),
        "B",
        "An asset is any valuable resource, such as information, hardware, software, accounts, services, or people.",
    ),
    Question(
        "Which three principles make up the information security triad?",
        (
            "Authentication, authorization, and backup",
            "Confidentiality, integrity, and availability",
            "Threats, vulnerabilities, and attacks",
            "Privacy, passwords, and updates",
        ),
        "B",
        "The three principles are confidentiality, integrity, and availability (CIA).",
    ),
    Question(
        "What is a vulnerability in information security?",
        (
            "A weakness that could be exploited",
            "A copy of data used for recovery",
            "A person authorized to access a system",
            "An event that always causes damage",
        ),
        "A",
        "A vulnerability is a weakness, such as a weak password or outdated software, that a threat may exploit.",
    ),
    Question(
        "What is social engineering?",
        (
            "Encrypting information with a secret key",
            "Manipulating people to obtain information or access",
            "Installing updates on a computer",
            "Giving every employee administrator access",
        ),
        "B",
        "Social engineering manipulates people, for example by impersonating bank staff or requesting an SMS code.",
    ),
    Question(
        "Which is a common warning sign of a phishing message?",
        (
            "An unexpected prize, urgent threat, or suspicious web address",
            "A request to verify the sender independently",
            "A familiar address with no request for sensitive information",
            "A routine message that contains no links",
        ),
        "A",
        "Phishing commonly uses urgency, unexpected prizes, suspicious domains, or requests for passwords and codes.",
    ),
    Question(
        "What does ransomware typically do?",
        (
            "Secretly records a user's activity",
            "Spreads automatically across networks",
            "Blocks or encrypts files and demands payment",
            "Pretends to be a legitimate program but does nothing harmful",
        ),
        "C",
        "Ransomware blocks or encrypts files and demands payment to restore access.",
    ),
    Question(
        "What is the purpose of two-factor authentication (2FA)?",
        (
            "To replace every password with a username",
            "To require another proof of identity in addition to the password",
            "To give users access to every account",
            "To make a backup of the user's files",
        ),
        "B",
        "2FA adds another identity check, such as a temporary code, authenticator app, physical key, or biometrics.",
    ),
    Question(
        "What is the difference between encryption and hashing?",
        (
            "Encryption uses a key to make data readable again; hashing produces a result used to represent data",
            "Hashing is a backup method; encryption is a type of malware",
            "They both store passwords as plain text",
            "Encryption is only used for images; hashing is only used for websites",
        ),
        "A",
        "Encryption protects data so it can be understood with the right key. Hashing produces a resulting value; passwords should not be stored in plain text.",
    ),
    Question(
        "What does the principle of least privilege mean?",
        (
            "Everyone should receive administrator access",
            "Users should share one account to simplify access",
            "Each person should have only the permissions needed for their role",
            "Permissions should never be reviewed",
        ),
        "C",
        "Least privilege limits each person's access to only what they need to perform their responsibilities.",
    ),
    Question(
        "According to the course, what should happen after identifying a security incident?",
        (
            "Ignore it unless a customer complains",
            "Identify, communicate, contain, correct, analyze, and prevent recurrence",
            "Delete all backups immediately",
            "Publish all affected users' passwords",
        ),
        "B",
        "The incident response sequence is to identify, communicate, contain, correct, analyze, and prevent repetition.",
    ),
    Question(
        "What does risk mean in information security?",
        (
            "A guaranteed attack that has already caused damage",
            "The possibility that a threat will exploit a vulnerability and cause harm",
            "Any valuable information stored by a company",
            "A security update that has not been installed",
        ),
        "B",
        "Risk is the possibility that a threat will exploit a vulnerability and cause harm.",
    ),
    Question(
        "Which example best shows a threat exploiting a vulnerability?",
        (
            "A backup copy is stored safely",
            "A user changes a strong password",
            "An attacker uses the password '123456' to break into an account",
            "A company installs a security update",
        ),
        "C",
        "An attacker is a threat, the weak password is a vulnerability, and the account intrusion is the resulting harm.",
    ),
    Question(
        "Which type of malware can spread automatically across networks?",
        ("Worm", "Spyware", "Trojan", "Ransomware"),
        "A",
        "A worm can spread automatically through networks.",
    ),
    Question(
        "What is a Trojan in cybersecurity?",
        (
            "A tool that makes regular backups",
            "Malware that secretly records a user's activity",
            "A program that only infects image files",
            "Malware that appears legitimate but performs a malicious action",
        ),
        "D",
        "A Trojan disguises itself as legitimate software while carrying out a malicious action.",
    ),
    Question(
        "Which type of malware spies on a user's activities?",
        ("Worm", "Spyware", "Ransomware", "Backup software"),
        "B",
        "Spyware is designed to spy on a user's activities.",
    ),
    Question(
        "Which is the safest password practice?",
        (
            "Reuse one memorable password for every service",
            "Use your name and birth year",
            "Use long, different passwords for each service",
            "Choose a short sequence such as '123456'",
        ),
        "C",
        "Use long, unique passwords and avoid personal information or simple sequences.",
    ),
    Question(
        "Why should you keep backups of important data?",
        (
            "To recover data after accidental deletion, equipment failure, or ransomware",
            "To make every user an administrator",
            "To prevent all phishing messages",
            "To replace software updates",
        ),
        "A",
        "Backups help recover information after accidental deletion, equipment failure, ransomware, or file corruption.",
    ),
    Question(
        "Why can an outdated program be unsafe even if it still works?",
        (
            "It automatically deletes every backup",
            "Known vulnerabilities may remain unpatched",
            "It cannot store any information",
            "It turns every user into an administrator",
        ),
        "B",
        "Working normally does not mean a program is secure; updates can fix known vulnerabilities.",
    ),
    Question(
        "Where should a developer keep a secret key used by a web application?",
        (
            "In visible text on the web page",
            "In the browser's HTML comments",
            "In a public JavaScript file",
            "On the back end, not in code sent to the browser",
        ),
        "D",
        "Anything delivered to a browser can potentially be viewed, so secret keys must not be placed in front-end code.",
    ),
    Question(
        "A teacher signs in and can enter grades, while a student can only view their own. Which statement is correct?",
        (
            "Signing in is authorization; permission to enter grades is authentication",
            "Both signing in and permissions are backups",
            "Signing in is authentication; permissions define authorization",
            "Students and teachers should always have identical permissions",
        ),
        "C",
        "Authentication identifies the user. Authorization determines what that user is allowed to do.",
    ),
)


def ask_question(number: int, question: Question) -> bool:
    """Show a question and return whether the player's answer is correct."""
    print(f"\nQuestion {number}/{len(QUESTIONS)}")
    print(question.prompt)
    for letter, option in zip("ABCD", question.options):
        print(f"  {letter}. {option}")

    while True:
        answer = input("Your answer (A-D): ").strip().upper()
        if answer in "ABCD" and len(answer) == 1:
            break
        print("Please enter A, B, C, or D.")

    if answer == question.answer:
        print("Correct!")
        is_correct = True
    else:
        print(f"Not quite. The correct answer is {question.answer}.")
        is_correct = False

    print(f"Why: {question.explanation}")
    return is_correct


def play_round() -> int:
    """Run one round and return the player's score."""
    score = 0
    for number, question in enumerate(QUESTIONS, start=1):
        if ask_question(number, question):
            score += 1

    print(f"\nFinal score: {score}/{len(QUESTIONS)}")
    if score == len(QUESTIONS):
        print("Excellent work! You mastered all the course topics.")
    elif score >= 7:
        print("Great job! Review the explanations for any missed questions.")
    else:
        print("Good effort! Review the course materials and try again.")
    return score


def main() -> None:
    print("=" * 48)
    print("INFORMATION SECURITY QUIZ")
    print(f"{len(QUESTIONS)} questions based on your course materials")
    print("=" * 48)

    while True:
        play_round()
        replay = input("\nWould you like to play again? (Y/N): ").strip().upper()
        if replay != "Y":
            print("Thanks for playing!")
            break


if __name__ == "__main__":
    main()
