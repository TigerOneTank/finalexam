# Pet Finder — JavaScript coursework prototype

**Context:** Coursework / exam starter project.

A coursework pet-listing interface with list/detail views and a PocketBase API client. The project includes a form implementation, but the submission flow is unfinished.

## Implementation

**Technologies:** HTML, CSS, JavaScript modules, PocketBase JavaScript SDK.

- Request pet records through the PocketBase SDK.
- Build detail links from record IDs.
- Read a URL parameter and request a single pet.
- Define an add-pet form handler and create-record API function.

## Run locally

Requires Git, Python 3 for the local server, and a modern browser. No build step is included.

```sh
git clone https://github.com/TigerOneTank/finalexam.git
cd finalexam
cd "final-exam-starter"
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/index.html`. On Windows, `py` can replace `python`. External APIs, fonts, scripts, or embeds require internet access.

## Learning focus

Practices ES modules, API wrappers, URL parameters, and the separation of list/detail pages. Completing and testing the create flow is the next meaningful milestone.

## Known limitations

- addNewPetForm() is defined but is never called, so its submit handler is not registered.
- After creation, the handler calls getAllPets() without re-rendering the cards.
- The hosted backend and its permissions/schema are not included or verified. A live working demo is not established.
- API content is interpolated into innerHTML. Input, missing-record, upload, and network-error handling need work.
- The repository contains a vendored PocketBase SDK; that library is third-party code, not an original implementation.

## Repository context

The folder is named `final-exam-starter`. Coursework and starter material should be acknowledged; the repository alone does not establish which portions were supplied. Do not submit data to the hosted service until ownership and access rules are confirmed.

## Review scope

The November 2026 portfolio review inspected the source and local file references. No browser compatibility or live external-service test is claimed. Existing coursework and contribution history are retained.
