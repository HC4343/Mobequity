package com.mobiquity.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber.json"
        },
        features = "src/test/resources/features",
        glue = "com/mobiquity/step_definitions",
        dryRun = false,
        tags = "@regression"

)

public class CukesRunner {


}
