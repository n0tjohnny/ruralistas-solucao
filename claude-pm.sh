#!/bin/zsh
claude --dangerously-skip-permissions --name "compadre-pm" --system-prompt "$(cat ./pm-role.md)"
