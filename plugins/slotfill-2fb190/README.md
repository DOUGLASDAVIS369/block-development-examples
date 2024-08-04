### Block Development Examples - Slotfill 2fb190

The goal of this example is to ...

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Folder                                                                                           | <span style="display: inline-block; width:250px">Short description</span> | Tags                                                                                                                                                                                                                                                               | ID ([❓](https://github.com/WordPress/block-development-examples/wiki/04-Why-an-ID-for-every-example%3F 'Why an ID for every example?')) | Download .zip                                                                                                | Live Demo                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [📁](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/slotfill-2fb190) | SlotFill                                                                  | <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#no-block">NO BLOCK</a></code></small>, <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#slotfill">SLOTFILL</a></code></small> | `2fb190`                                                                                                                                 | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/slotfill-2fb190.zip) | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/slotfill-2fb190/_playground/blueprint.json) |

<!-- @TABLE EXAMPLES END -->

See Individual Examples:

-   [PluginSidebar](https://playground.wordpress.net/#ewogICIkc2NoZW1hIjogImh0dHBzOi8vcGxheWdyb3VuZC53b3JkcHJlc3MubmV0L2JsdWVwcmludC1zY2hlbWEuanNvbiIsCiAgImxvZ2luIjogdHJ1ZSwKICAibGFuZGluZ1BhZ2UiOiAiL3dwLWFkbWluL3Bvc3QucGhwP3Bvc3Q9MSZhY3Rpb249ZWRpdCIsCiAgInN0ZXBzIjogWwogICAgewogICAgICAic3RlcCI6ICJpbnN0YWxsUGx1Z2luIiwKICAgICAgInBsdWdpblppcEZpbGUiOiB7CiAgICAgICAgInJlc291cmNlIjogInVybCIsCiAgICAgICAgInVybCI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vV29yZFByZXNzL2Jsb2NrLWRldmVsb3BtZW50LWV4YW1wbGVzL2RlcGxveS96aXBzL3Nsb3RmaWxsLTJmYjE5MC56aXAiCiAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICJzdGVwIjogIndyaXRlRmlsZSIsCiAgICAgICJwYXRoIjogIi93b3JkcHJlc3Mvd3AtY29udGVudC9wbHVnaW5zL3Nsb3RmaWxsLTJmYjE5MC9pbmRpdmlkdWFsLWV4YW1wbGUtYWRkLW9uLnBocCIsCiAgICAgICJkYXRhIjogIjw/cGhwIGZ1bmN0aW9uIHNldF9pbmRpdmlkdWFsX2V4YW1wbGUoKSB7IHdwX2FkZF9pbmxpbmVfc2NyaXB0KCAnc2xvdGZpbGwtMmZiMTkwJywgJ3dpbmRvdy5pbmRpdmlkdWFsRXhhbXBsZSA9IFwiUGx1Z2luU2lkZWJhclwiJywgJ2JlZm9yZScgKTsgfSIKICAgIH0sCiAgICB7CiAgICAgICJzdGVwIjogImFjdGl2YXRlUGx1Z2luIiwKICAgICAgInBsdWdpblBhdGgiOiAic2xvdGZpbGwtMmZiMTkwL3Nsb3RmaWxsLTJmYjE5MC5waHAiCiAgICB9CiAgXQp9Cg==)
-   [PluginDocumentSettingPanel](ewogICIkc2NoZW1hIjogImh0dHBzOi8vcGxheWdyb3VuZC53b3JkcHJlc3MubmV0L2JsdWVwcmludC1zY2hlbWEuanNvbiIsCiAgImxvZ2luIjogdHJ1ZSwKICAibGFuZGluZ1BhZ2UiOiAiL3dwLWFkbWluL3Bvc3QucGhwP3Bvc3Q9MSZhY3Rpb249ZWRpdCIsCiAgInN0ZXBzIjogWwogICAgewogICAgICAic3RlcCI6ICJpbnN0YWxsUGx1Z2luIiwKICAgICAgInBsdWdpblppcEZpbGUiOiB7CiAgICAgICAgInJlc291cmNlIjogInVybCIsCiAgICAgICAgInVybCI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vV29yZFByZXNzL2Jsb2NrLWRldmVsb3BtZW50LWV4YW1wbGVzL2RlcGxveS96aXBzL3Nsb3RmaWxsLTJmYjE5MC56aXAiCiAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICJzdGVwIjogIndyaXRlRmlsZSIsCiAgICAgICJwYXRoIjogIi93b3JkcHJlc3Mvd3AtY29udGVudC9wbHVnaW5zL3Nsb3RmaWxsLTJmYjE5MC9pbmRpdmlkdWFsLWV4YW1wbGUtYWRkLW9uLnBocCIsCiAgICAgICJkYXRhIjogIjw/cGhwIGZ1bmN0aW9uIHNldF9pbmRpdmlkdWFsX2V4YW1wbGUoKSB7IHdwX2FkZF9pbmxpbmVfc2NyaXB0KCAnc2xvdGZpbGwtMmZiMTkwJywgJ3dpbmRvdy5pbmRpdmlkdWFsRXhhbXBsZSA9IFwiUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcIicsICdiZWZvcmUnICk7IH0iCiAgICB9LAogICAgewogICAgICAic3RlcCI6ICJhY3RpdmF0ZVBsdWdpbiIsCiAgICAgICJwbHVnaW5QYXRoIjogInNsb3RmaWxsLTJmYjE5MC9zbG90ZmlsbC0yZmIxOTAucGhwIgogICAgfQogIF0KfQo=)

## Understanding the Example Code

Overview of the code in bullet point form.

## Related resources

Bulleted list of references

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
