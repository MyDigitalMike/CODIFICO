using System.Collections.Generic;
using System.Threading.Tasks;
using Moq;
using Api.Data.Repositories;
using Api.Data.UnitOfWork;
using Api.DTOs;
using Api.Services;
using Xunit;
namespace Api.Test
{
    public class CustomerPredictionServiceTests
    {
        [Fact]
        public async Task GetCustomerPredictionsAsync_ReturnsPredictions()
        {
            // Arrange
            var mockRepo = new Mock<ICustomerPredictionRepository>();
            mockRepo.Setup(repo => repo.GetCustomerPredictionsAsync())
                    .ReturnsAsync(new List<CustomerPredictionDto>
                    {
                    new CustomerPredictionDto
                    {
                        CustomerName = "Test Customer",
                        LastOrderDate = System.DateTime.Now.AddDays(-10),
                        NextPredictedOrder = System.DateTime.Now.AddDays(20)
                    }
                    });

            var mockUnitOfWork = new Mock<IUnitOfWork>();
            mockUnitOfWork.Setup(u => u.CustomerPredictions).Returns(mockRepo.Object);

            var service = new CustomerPredictionService(mockUnitOfWork.Object);

            // Act
            var result = await service.GetCustomerPredictionsAsync();

            // Assert
            Assert.NotNull(result);
            Assert.Single(result);
            Assert.Equal("Test Customer", result.First().CustomerName);
        }
    }
}
