#!/bin/zsh
claude --dangerously-skip-permissions --name "gabarito-pm" --system-prompt "$(cat ./pm-role.md)"
