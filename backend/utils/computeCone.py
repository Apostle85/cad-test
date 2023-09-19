import numpy as np
import sys
import json

def get_magnitude(point, B_point):
    return np.sqrt((point[0]-B_point[0])**2+(point[1]-B_point[1])**2+(point[2]-B_point[2])**2) 

def compute_cone(number_of_segments: int, cone_height: float, radius: float):
    points = np.array([np.array([0, cone_height, 0])])
    indices = np.array([])
    rad = 2*np.pi/number_of_segments
    B_point = np.array([0,0, -1 * radius**2 / cone_height])
    magnitudes = np.array([])
    for i in range(number_of_segments):
        angle = i*rad
        point = np.array([radius*np.cos(angle),0,radius*np.sin(angle)])
        magn = get_magnitude(point, B_point)
        magnitudes = np.append(magnitudes, (point-B_point)/magn)
        points = np.append(points, point)
        indices = np.append(indices, [0, (i+1) % number_of_segments+1, i+1])
    # for i in range(1, number_of_segments-1):
    #     indices = np.append(indices, [i,(i+1)%number_of_segments+1,(i+1)])
    # file2 = open('myfile2.txt', 'w')
    # file2.write(json.dumps((points.tolist(), indices.tolist())))
    # file2.close()
    return json.dumps((points.tolist(), indices.tolist(), magnitudes.tolist()))

json_object = json.loads((sys.argv[1]))
cone_data = compute_cone(int(json_object["number_of_segments"]),float(json_object["cone_height"]),float(json_object["radius"]))
print(cone_data)