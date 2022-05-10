import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib'
import { EventBus } from 'aws-cdk-lib/aws-events'
import { Construct } from 'constructs'

export class MainStack extends Stack {
  constructor (scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // Create a sample event bus
    const eventBus = new EventBus(this, 'EventBus')

    // Output
    new CfnOutput(this, 'EventBusName', {
      value: eventBus.eventBusName
    })
  }
}
