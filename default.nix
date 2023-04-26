with import <nixpkgs> {};
mkShell {
  packages = [
    bashInteractive
    nodejs
    (terraform.withPlugins (ps: with ps; [ grafana ]))
  ];
}
