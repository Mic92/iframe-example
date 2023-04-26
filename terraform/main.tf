terraform {
  required_providers {
    grafana = {
      source = "grafana/grafana"
    }
  }
}

provider "grafana" {
  url = "https://grafana.monitoring-00-cluster.kuutamo.computer"
}

resource "grafana_organization" "test" {
  name         = "terraform-test"
  admin_user   = "admin"
  create_users = true
  viewers = [ 
    # this is the user id that we get from the web frontend and sent via email
    "1001" 
  ]
}


resource "grafana_dashboard" "example" {
  config_json = file("dashboard.json")
  org_id      = grafana_organization.test.id
}
