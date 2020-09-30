// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as documentprocessorserviceModule from '../src';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubLongRunningCall<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().rejects(callError)
    : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().callsArgWith(2, callError)
    : sinon.stub().callsArgWith(2, null, mockOperation);
}

describe('v1beta3.DocumentProcessorServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient
        .servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient
        .apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient
        .port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.documentProcessorServiceStub, undefined);
    await client.initialize();
    assert(client.documentProcessorServiceStub);
  });

  it('has close method', () => {
    const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('processDocument', () => {
    it('invokes processDocument without error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.ProcessRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.ProcessResponse()
      );
      client.innerApiCalls.processDocument = stubSimpleCall(expectedResponse);
      const [response] = await client.processDocument(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.processDocument as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes processDocument without error using callback', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.ProcessRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.ProcessResponse()
      );
      client.innerApiCalls.processDocument = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.processDocument(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.documentai.v1beta3.IProcessResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.processDocument as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes processDocument with error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.ProcessRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.processDocument = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.processDocument(request), expectedError);
      assert(
        (client.innerApiCalls.processDocument as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('batchProcessDocuments', () => {
    it('invokes batchProcessDocuments without error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.BatchProcessRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.batchProcessDocuments = stubLongRunningCall(
        expectedResponse
      );
      const [operation] = await client.batchProcessDocuments(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.batchProcessDocuments as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes batchProcessDocuments without error using callback', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.BatchProcessRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.batchProcessDocuments = stubLongRunningCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.batchProcessDocuments(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.documentai.v1beta3.IBatchProcessResponse,
              protos.google.cloud.documentai.v1beta3.IBatchProcessMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.documentai.v1beta3.IBatchProcessResponse,
        protos.google.cloud.documentai.v1beta3.IBatchProcessMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.batchProcessDocuments as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes batchProcessDocuments with call error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.BatchProcessRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.batchProcessDocuments = stubLongRunningCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.batchProcessDocuments(request),
        expectedError
      );
      assert(
        (client.innerApiCalls.batchProcessDocuments as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes batchProcessDocuments with LRO error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.BatchProcessRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.batchProcessDocuments = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.batchProcessDocuments(request);
      await assert.rejects(operation.promise(), expectedError);
      assert(
        (client.innerApiCalls.batchProcessDocuments as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes checkBatchProcessDocumentsProgress without error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      expectedResponse.name = 'test';
      expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
      expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const decodedOperation = await client.checkBatchProcessDocumentsProgress(
        expectedResponse.name
      );
      assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
      assert(decodedOperation.metadata);
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });

    it('invokes checkBatchProcessDocumentsProgress with error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const expectedError = new Error('expected');

      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.checkBatchProcessDocumentsProgress(''),
        expectedError
      );
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
  });

  describe('reviewDocument', () => {
    it('invokes reviewDocument without error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.ReviewDocumentRequest()
      );
      request.humanReviewConfig = '';
      const expectedHeaderRequestParams = 'human_review_config=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.reviewDocument = stubLongRunningCall(
        expectedResponse
      );
      const [operation] = await client.reviewDocument(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reviewDocument as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes reviewDocument without error using callback', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.ReviewDocumentRequest()
      );
      request.humanReviewConfig = '';
      const expectedHeaderRequestParams = 'human_review_config=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.reviewDocument = stubLongRunningCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.reviewDocument(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.documentai.v1beta3.IReviewDocumentResponse,
              protos.google.cloud.documentai.v1beta3.IReviewDocumentOperationMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.documentai.v1beta3.IReviewDocumentResponse,
        protos.google.cloud.documentai.v1beta3.IReviewDocumentOperationMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reviewDocument as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes reviewDocument with call error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.ReviewDocumentRequest()
      );
      request.humanReviewConfig = '';
      const expectedHeaderRequestParams = 'human_review_config=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.reviewDocument = stubLongRunningCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.reviewDocument(request), expectedError);
      assert(
        (client.innerApiCalls.reviewDocument as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes reviewDocument with LRO error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.documentai.v1beta3.ReviewDocumentRequest()
      );
      request.humanReviewConfig = '';
      const expectedHeaderRequestParams = 'human_review_config=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.reviewDocument = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.reviewDocument(request);
      await assert.rejects(operation.promise(), expectedError);
      assert(
        (client.innerApiCalls.reviewDocument as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes checkReviewDocumentProgress without error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      expectedResponse.name = 'test';
      expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
      expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const decodedOperation = await client.checkReviewDocumentProgress(
        expectedResponse.name
      );
      assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
      assert(decodedOperation.metadata);
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });

    it('invokes checkReviewDocumentProgress with error', async () => {
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const expectedError = new Error('expected');

      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.checkReviewDocumentProgress(''),
        expectedError
      );
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
  });

  describe('Path templates', () => {
    describe('humanReviewConfig', () => {
      const fakePath = '/rendered/path/humanReviewConfig';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        processor: 'processorValue',
      };
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.humanReviewConfigPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.humanReviewConfigPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('humanReviewConfigPath', () => {
        const result = client.humanReviewConfigPath(
          'projectValue',
          'locationValue',
          'processorValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.humanReviewConfigPathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromHumanReviewConfigName', () => {
        const result = client.matchProjectFromHumanReviewConfigName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.humanReviewConfigPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromHumanReviewConfigName', () => {
        const result = client.matchLocationFromHumanReviewConfigName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.humanReviewConfigPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchProcessorFromHumanReviewConfigName', () => {
        const result = client.matchProcessorFromHumanReviewConfigName(fakePath);
        assert.strictEqual(result, 'processorValue');
        assert(
          (client.pathTemplates.humanReviewConfigPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('processor', () => {
      const fakePath = '/rendered/path/processor';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        processor: 'processorValue',
      };
      const client = new documentprocessorserviceModule.v1beta3.DocumentProcessorServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.processorPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.processorPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('processorPath', () => {
        const result = client.processorPath(
          'projectValue',
          'locationValue',
          'processorValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.processorPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProcessorName', () => {
        const result = client.matchProjectFromProcessorName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.processorPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromProcessorName', () => {
        const result = client.matchLocationFromProcessorName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.processorPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchProcessorFromProcessorName', () => {
        const result = client.matchProcessorFromProcessorName(fakePath);
        assert.strictEqual(result, 'processorValue');
        assert(
          (client.pathTemplates.processorPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});