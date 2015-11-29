WebEngage Engagement Tools Bundle for GitBook
==============

> Work in progress...

Install via **NPM**:

```
$ npm install gitbook-plugin-webengage
```

Use within your book by making following entry in your `book.json`:

```
{
    "plugins": ["webengage"]
}
```

Now set the `WebEngage LicenseCode` using the plugins configuration in the book.json:

```
{
    "plugins": ["webengage"],
    "pluginsConfig": {
        "webengage": {
            "licenseCode": "your_license_code_here"
        }
    }
}
```

For an overview of all available options, please refer to the [WebEngage Docs](http://docs.webengage.com/api/js-api-v-5.0.html).
