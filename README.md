# Metric http tokens

Format: `base64encode(user_id + ":" + password)`

# Using terraform to create an organisation with dashboard
Copy .envrc.private-template to .envrc.private and edit
or export the grafana password like this:

```
export GRAFANA_AUTH="admin:<grafana-password>"
```

# To open the iframe of the dashboard generated by terraform in firefox

This requires the jwt private key to be stored as `jwt-private.key`:

1. `npm install`
2. `npm start jwt-private.key`
